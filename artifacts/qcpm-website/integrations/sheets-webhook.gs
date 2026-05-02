/**
 * QCPM Contact Form to Google Sheet
 *
 * Setup (one time):
 *  1. Create a new Google Sheet (e.g. "QCPM Contact Submissions").
 *  2. In that sheet: Extensions to Apps Script.
 *  3. Replace the default Code.gs with this file.
 *  4. Set SHEET_ID below to the spreadsheet ID from its URL
 *     (the long string between /d/ and /edit).
 *  5. Set SHARED_SECRET to a random string and store the same value in
 *     Cloudflare Pages env as VITE_SHEETS_WEBHOOK_SECRET.
 *  6. Deploy: top-right Deploy to New deployment to Web app.
 *       Execute as: Me
 *       Who has access: Anyone
 *  7. Copy the resulting /exec URL into Cloudflare Pages env as
 *     VITE_SHEETS_WEBHOOK_URL, then redeploy the site.
 *
 * The first row of the sheet is auto-created as a header row on first run.
 */

// Replace these two values directly in the Apps Script editor before deploying.
// Do not commit real values back to the public repo.
const SHEET_ID = 'PUT_SPREADSHEET_ID_HERE';
const SHEET_NAME = 'Submissions';
const SHARED_SECRET = 'PUT_RANDOM_STRING_HERE';

const HEADERS = [
  'Timestamp',
  'Name',
  'Email',
  'Phone',
  'Item Type',
  'Message',
  'Source',
  'User Agent',
  'Referrer',
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const params = (e && e.parameter) || {};

    if (!SHARED_SECRET || params.secret !== SHARED_SECRET) {
      return jsonResponse({ success: false, error: 'unauthorized' }, 401);
    }

    const sheet = getOrCreateSheet();
    sheet.appendRow([
      new Date(),
      params.name || '',
      params.email || '',
      params.phone || '',
      params.itemType || '',
      params.message || '',
      params.source || 'qcpm-contact',
      params.userAgent || '',
      params.referrer || '',
    ]);

    return jsonResponse({ success: true });
  } catch (err) {
    return jsonResponse({ success: false, error: String(err) }, 500);
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return jsonResponse({ ok: true, message: 'QCPM webhook is alive' });
}

function getOrCreateSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  } else if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function jsonResponse(payload, status) {
  const out = ContentService.createTextOutput(JSON.stringify(payload));
  out.setMimeType(ContentService.MimeType.JSON);
  return out;
}
