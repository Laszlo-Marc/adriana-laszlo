// lib/security/turnstile.ts

type TurnstileVerifyResponse = {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
  action?: string;
  cdata?: string;
};

export async function verifyTurnstileToken({
  token,
  ip,
}: {
  token: string;
  ip?: string | null;
}) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  console.log("Turnstile input check:", {
    hasSecret: Boolean(secret),
    secretPrefix: secret?.slice(0, 8),
    hasToken: Boolean(token),
    tokenLength: token.length,
    ip,
  });

  if (!secret) {
    console.error("Missing TURNSTILE_SECRET_KEY");
    return false;
  }

  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);

  // Do not send "unknown" as remoteip.
  if (ip && ip !== "unknown") {
    formData.append("remoteip", ip);
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: formData,
    },
  );

  const result = (await response.json()) as TurnstileVerifyResponse;

  console.log("Turnstile verification result:", {
    httpStatus: response.status,
    success: result.success,
    hostname: result.hostname,
    errors: result["error-codes"],
    challengeTs: result.challenge_ts,
    action: result.action,
    cdata: result.cdata,
  });

  return result.success;
}
