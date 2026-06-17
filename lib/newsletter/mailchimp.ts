// lib/newsletter/mailchimp.ts

import crypto from "node:crypto";

type MailchimpSubscribeInput = {
  email: string;
  firstName?: string;
  source?: string;
  tags?: string[];
};

type MailchimpMergeFields = {
  FNAME?: string;
  SOURCE?: string;
};

type MailchimpRequestBody = {
  email_address: string;
  status_if_new: "subscribed";
  status?: "subscribed";
  merge_fields?: MailchimpMergeFields;
  tags?: string[];
};

function getMailchimpConfig() {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!apiKey || !serverPrefix || !audienceId) {
    throw new Error("Missing Mailchimp environment variables");
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
    .update(email.toLowerCase().trim())
    .digest("hex");
}

export async function subscribeToNewsletter({
  email,
  firstName,
  source = "Website",
  tags = [],
}: MailchimpSubscribeInput) {
  const { apiKey, serverPrefix, audienceId } = getMailchimpConfig();

  const subscriberHash = getSubscriberHash(email);

  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`;

  const body: MailchimpRequestBody = {
    email_address: email,
    status_if_new: "subscribed",
    status: "subscribed",
    merge_fields: {
      ...(firstName ? { FNAME: firstName } : {}),
      SOURCE: source,
    },
    tags,
  };

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString(
        "base64",
      )}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();

  if (!response.ok) {
    console.error("Mailchimp subscribe error:", result);

    return {
      ok: false,
      error: result,
    };
  }

  return {
    ok: true,
    data: result,
  };
}
