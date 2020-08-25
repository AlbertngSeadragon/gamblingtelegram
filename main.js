const axios = require("axios");
const xml2js = require("xml2js")


async function parse(file) {
    const promise = await new Promise((resolve, reject) => {
      //const parser = new xml2js.Parser({ explicitArray: false });
      const parser = new xml2js.Parser()
      parser.parseString(file, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      });
    });
    return promise;
  }

function MacauseAPI() {
    return axios.get('https://m.macauslot.com/data/www/soccer/xml/odds/odds.xml')
        .then(function (response) {
            // handle success
            //return jsonResult
            return response.data
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

function jockyclubAPI() {
    console.log("hihihi");
    return axios.get('https://bet.hkjc.com/football/getJSON.aspx?jsontype=odds_had.aspx')
        .then(function (response) {
            // handle success
            //console.log('hi');
            //console.log(response);
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error.data);
        })
}

async function main() {
    //console.log(await jockyclubRaw)
    let rawMacuse =  await parse(await MacauseAPI())
    //console.log(rawMacuse.Fixtures.Fixture)
    // xmlTojson(raw, function (err, result) {
    //     //console.dir(result);
    console.log('\n')
    // });
    let raw = await jockyclubAPI()
    console.log(raw[1].matches)
}

main()