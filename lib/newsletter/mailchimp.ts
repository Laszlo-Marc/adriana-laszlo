import crypto from "node:crypto";

type SubscribeToNewsletterInput = {
  email: string;
  firstName?: string;
  source?: string;
  tags?: string[];
};

type SubscribeToNewsletterResult = {
  ok: boolean;
  message?: string;
};

function getMailchimpConfig() {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!apiKey || !serverPrefix || !audienceId) {
    throw new Error("Missing Mailchimp environment variables.");
  }

  return {
    apiKey,
    serverPrefix,
    audienceId,
  };
}

function getSubscriberHash(email: string) {
  return crypto
    .createHash("md5")
    .update(email.trim().toLowerCase())
    .digest("hex");
}

function getAuthHeader(apiKey: string) {
  return `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`;
}

export async function subscribeToNewsletter({
  email,
  firstName,
  source,
  tags = [],
}: SubscribeToNewsletterInput): Promise<SubscribeToNewsletterResult> {
  try {
    const { apiKey, serverPrefix, audienceId } = getMailchimpConfig();

    const normalizedEmail = email.trim().toLowerCase();
    const subscriberHash = getSubscriberHash(normalizedEmail);
    const authHeader = getAuthHeader(apiKey);

    const memberResponse = await fetch(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`,
      {
        method: "PUT",
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: normalizedEmail,
          status_if_new: "subscribed",
          status: "subscribed",
          merge_fields: {
            FNAME: firstName?.trim() || "",
          },
        }),
      },
    );

    if (!memberResponse.ok) {
      const errorBody = await memberResponse.text();

      console.error("Mailchimp member upsert failed:", {
        status: memberResponse.status,
        body: errorBody,
      });

      return {
        ok: false,
        message: "Abonarea la newsletter nu a putut fi finalizată.",
      };
    }

    const allTags = Array.from(
      new Set([source, ...tags].filter(Boolean)),
    ) as string[];

    if (allTags.length > 0) {
      const tagResponse = await fetch(
        `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}/tags`,
        {
          method: "POST",
          headers: {
            Authorization: authHeader,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tags: allTags.map((tag) => ({
              name: tag,
              status: "active",
            })),
          }),
        },
      );

      if (!tagResponse.ok) {
        const errorBody = await tagResponse.text();

        console.error("Mailchimp tag update failed:", {
          status: tagResponse.status,
          body: errorBody,
        });
      }
    }

    return { ok: true };
  } catch (error) {
    console.error("Mailchimp subscribe error:", error);

    return {
      ok: false,
      message: "Abonarea la newsletter nu a putut fi finalizată.",
    };
  }
}
