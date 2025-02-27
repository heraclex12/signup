import nodemailer from 'nodemailer';

/**
 * Email configuration interface
 */
interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

/**
 * Email template interface
 */
interface EmailTemplate {
  from: string;
  to: string;
  subject: string;
  html: string;
}

// Email configuration
const emailConfig: EmailConfig = {
  host: process.env.SMTP_HOST!,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
  },
};

// Initialize email transporter
const transporter = nodemailer.createTransport(emailConfig);

// Get base URL for email links
const getBaseUrl = () => process.env.NEXT_PUBLIC_APP_URL || process.env.NEXTAUTH_URL;

/**
 * Sends a verification email to the user
 * @param email - User's email address
 * @param name - User's name
 * @param token - Verification token
 */
export const sendVerificationEmail = async (
  email: string,
  name: string,
  token: string
): Promise<void> => {
  try {
    const verificationUrl = `${getBaseUrl()}/api/verify?token=${token}`;

    const emailTemplate: EmailTemplate = {
      from: process.env.SMTP_USER!,
      to: email,
      subject: 'Verify Your Email Address',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Welcome ${name}!</h2>
          <p style="color: #666; line-height: 1.5;">
            Please verify your email address by clicking the link below:
          </p>
          <div style="margin: 20px 0;">
            <a href="${verificationUrl}" 
               style="background-color: #0070f3; 
                      color: white; 
                      padding: 12px 24px; 
                      text-decoration: none; 
                      border-radius: 5px; 
                      display: inline-block;">
              Verify Email
            </a>
          </div>
          <p style="color: #666; line-height: 1.5;">
            This link will expire in 24 hours.
          </p>
          <p style="color: #999; font-size: 0.9em;">
            If you didn't create an account, you can safely ignore this email.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(emailTemplate);
  } catch (error) {
    console.error('Error sending verification email:', error);
    throw new Error('Failed to send verification email');
  }
};

/**
 * Sends a welcome email to the user after verification
 * @param email - User's email address
 * @param name - User's name
 */
export const sendWelcomeEmail = async (
  email: string,
  name: string
): Promise<void> => {
  try {
    const signInUrl = `${getBaseUrl()}/signin`;

    const emailTemplate: EmailTemplate = {
      from: process.env.SMTP_USER!,
      to: email,
      subject: 'Welcome to Our App!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Welcome ${name}!</h2>
          <p style="color: #666; line-height: 1.5;">
            Thank you for verifying your email address. Your account is now active.
          </p>
          <p style="color: #666; line-height: 1.5;">
            You can now sign in to your account:
          </p>
          <div style="margin: 20px 0;">
            <a href="${signInUrl}" 
               style="background-color: #0070f3; 
                      color: white; 
                      padding: 12px 24px; 
                      text-decoration: none; 
                      border-radius: 5px; 
                      display: inline-block;">
              Sign In
            </a>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(emailTemplate);
  } catch (error) {
    console.error('Error sending welcome email:', error);
    throw new Error('Failed to send welcome email');
  }
};
