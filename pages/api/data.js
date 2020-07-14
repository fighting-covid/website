const { GoogleSpreadsheet } = require("google-spreadsheet");

const doc = new GoogleSpreadsheet("1-ZxyZv09daZAgbSFedcilEMz88gexgLGzpIxJsvLuGA");

export default async (req, res) => {
  if (req.method === "GET") {
    await doc.useServiceAccountAuth({
      client_email: "site01@ycro-273318.iam.gserviceaccount.com",
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDtqT0/CLP7LUFP\nLko6QLoQ3lv4SioopvGjAvcktCtI5GyXwXIW8kNe3kZVP0ArPLb+NVnfMk1pAEfQ\nb7zASVdYvZnnGzbB8hUGqoTh5MQSZxTB8nhYtPEAPiIoo/cPCQTGqiEDTB0Si48S\nIWUi5bDNwgV9l6VSjxeFvQDg+zh2rJoOTIQSNjhd0ka3Uwr0UjULYFSizw1wFDoz\n+Mg3VHV2pXwpiN0LI5rTmw9oQ0aKqeqOfbfbe+Ely3KZmaahEPeSVWI3XQgQlbLI\njRk1zzOYGPuSZs88X9i8WuLBK/VoIdDzfflUfI59HxctLufVDWVHBu9ewnvt/AcM\nkOnVVdaFAgMBAAECggEAGy2D3f36SwqBUfM6tM+rF3u+K7YbfRuePWR867sYyhSp\nIG+UQvCAaMxlYaFCjs86I/bo6J/Bf3TzQXBNtvWMIg9IlsejaulqoyED4is9itcz\n5fv67DYA62SvllMt0Q/YdnmFHfHpzzGbcljUTnnSzqzV4OdjFf5cE8Sp4ZCJA/T/\nmOP3FGRjuoC0coOdsmrZM2LFCFIbFaxB2vRfW1J2c2SW+HaC5sJu8UwRqXx1S4eZ\n3gHbru5iVZPBLoft0UDDBL73CkLabXuc3gKWw6Q0Tx3paqGu/Fp7jbR+EfHP71v0\nY3HjPWCcBTXu0Rr3AYzeEbEm3czdhGNKC1NDbY7nvwKBgQD8itCFw2vQGsCaoEmr\nUW/QWS3+pdJI7OckaRCf4iuaYJB/Opz+5U9bCA5EfhMe5f0Yaw+JFT/5ZiGagnr/\nJE7i00dXfpQBnDiXHQ8pHNcPedcnyh8wIraOpbZAVFKWMCI8IOsNTnsBnlNQ3575\ndnWBeMpa3MyuH6amUH0+67Q8BwKBgQDw6kPJaxvnsYody7cYjTE1tAZtlq2kmVVO\nP8oAjG8cOzGVT+FrgMOs7FvT9wKuMYw8vjYfTswCqrRJqDzjvIvUCHHXyLCLVhS2\n6mEH0ArPchdiZGFSWFfOyZAqCT9N/z97s9bJ0mXcH7cxeT2+BI5fZ9s+acBEU7HH\nU1HTxasOEwKBgQC1GYLBectVt+mIuQs7TLIHUfx20UkEPMbgyGtAjHtCQJ8+bbTp\n4V1P5W391f82OC2Qli3U2yU+XuwYFhvH3ayoYmSVrNLMeM/oJdGaZPEgSvpssTg+\nV5Zcox8X8KAszaWvQtfseewh0/zhUQt6z2UijJFoKVCqSU5DlBLMzVA5fwKBgA2I\n+9n7HIw920alRVopxJQB00Kg7oyK2NIWn2C8gxmQ8c4zuLRzfYrflKEqBYqH2hsn\njJ7hrHCR6qMgwpsA4tI8zziSW+jYIz3LmTv5IkJZZJrwjM81i2lgxaq27kmRh52J\nkw2vtm1RktdCuodMdjtB+H1fL6AnG5vZQIWnW17lAoGBAKvZuI2Eqskw6OGbhVd7\nFswbzUTqXKDntNTPFfbwvvSCIoDqZ6PBL33g7ZXz71a+bGA5bpecLCya34klpFox\n8jZDU3sRCABdF1RVZLr2rjQ2xq7hlOTZH/jFEM5kcc3k5D3PVy3/Fh6X0MhkeM5H\ngVnLDluYEasajZM7GOX/aH43\n-----END PRIVATE KEY-----\n",
    });
    await doc.loadInfo(); // Loads document properties and worksheets

    res.setHeader("Content-Type", "application/json");

    try {
      const sheet = doc.sheetsById[1701444519];
      const rows = await sheet.getRows();

      let data = [];
      rows.forEach((row) => {
        // Convert the row data into an array
        console.log(row);
        console.log("name", row["Name of organization"]);
        console.log("facemasks", row["Face Masks"]);
        console.log("shields", row["Face Shields Remaining"]);
        const d = row._rawData;
        // Only push if the fields are defined
        if (d[0] && d[7] && d[8])
          data.push({ name: d[0], masks: d[7], shields: d[8] });
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
