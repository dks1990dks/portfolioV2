export function baseLayout(content) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0f172a; color: #e2e8f0; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #1e293b; border-radius: 12px; border: 1px solid #334155; overflow: hidden; }
    .header { background: #0284c7; padding: 24px; text-align: center; color: #ffffff; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px; }
    .header p { margin: 4px 0 0; font-size: 13px; opacity: 0.9; }
    .body { padding: 30px; }
    .table-info { width: 100%; border-collapse: collapse; margin: 20px 0; }
    .table-info td { padding: 10px 12px; border-bottom: 1px solid #334155; font-size: 14px; }
    .table-info td.label { font-weight: bold; color: #38bdf8; width: 30%; }
    .desc-box { background: #0f172a; border-left: 4px solid #0284c7; padding: 15px; border-radius: 4px; font-size: 14px; line-height: 1.6; margin-top: 15px; color: #cbd5e1; }
    .steps-list { padding-left: 20px; color: #cbd5e1; font-size: 14px; line-height: 1.8; }
    .footer { background: #0f172a; padding: 20px; text-align: center; border-top: 1px solid #334155; font-size: 12px; color: #94a3b8; }
    .footer a { color: #38bdf8; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Deepak Codes</h1>
      <p>Custom Software • ERP • SaaS • Dashboards</p>
    </div>
    <div class="body">
      ${content}
    </div>
    <div class="footer">
      <p><strong>Deepak Kumar</strong> — Founder, Deepak Codes</p>
      <p><a href="https://deepakcodes.com">deepakcodes.com</a> | <a href="mailto:contact@deepakcodes.com">contact@deepakcodes.com</a></p>
    </div>
  </div>
</body>
</html>
`;
}