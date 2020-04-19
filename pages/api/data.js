const { GoogleSpreadsheet } = require("google-spreadsheet");

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

export default async (req, res) => {
  if (req.method === "GET") {
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    });
    await doc.loadInfo(); // Loads document properties and worksheets

    res.setHeader("Content-Type", "application/json");

    try {
      const sheet = doc.sheetsById[1701444519];
      const rows = await sheet.getRows();

      let data = [];
      rows.forEach((row) => {
        // Convert the row data into an array
        const d = row._rawData;
        // Only push if the fields are defined
        if (d[2] && d[7] && d[8])
          data.push({ name: d[2], masks: d[7], shields: d[8] });
      });

      res.statusCode = 200;
      res.end(JSON.stringify(data));
    } catch (e) {
      res.statusCode = 500;
      console.error(e);
      res.end(JSON.stringify({ message: "Unable to get data." }));
    }
  } else {
    res.statusCode = 405;
    res.end(JSON.stringify({ message: "Invalid request type." }));
  }
};
