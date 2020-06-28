const { GoogleSpreadsheet } = require("google-spreadsheet");

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

export default async (req, res) => {
  if (req.method === "POST") {
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    });
    await doc.loadInfo(); // Loads document properties and worksheets

    res.setHeader("Content-Type", "application/json");

    // Check that all fields are present
    if (
      req.body.hasOwnProperty("name") &&
      req.body.hasOwnProperty("email") &&
      req.body.hasOwnProperty("message")
    ) {
      // Attempt to write to the sheet
      try {
        const sheet = doc.sheetsById[784093421];

        await sheet.setHeaderRow(["Name", "Email", "Message"]);
        const entry = await sheet.addRow({
          Name: req.body.name,
          Email: req.body.email,
          Message: req.body.message,
        });
        entry.save();

        res.statusCode = 200;
        res.end(
          JSON.stringify({
            message: "Message submitted successfully. Thank you!",
          })
        );
      } catch {
        res.statusCode = 500;
        res.end(JSON.stringify({ message: "Unable to submit message." }));
      }
    } else {
      res.statusCode = 400;
      res.end(JSON.stringify({ message: "Fields missing." }));
    }
  } else {
    res.statusCode = 405;
    res.end(JSON.stringify({ message: "Invalid request type." }));
  }
};
