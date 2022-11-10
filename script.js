handlers.getBaseCharacters = function (args) {
    var result = server.GetTitleData({
        Keys: ["Characters", "Abilities"],
    });

    var characters = result.Data["Characters"];
    var abilities = result.Data["Abilities"];

    log.info(result);
    log.info(characters);
    log.info(abilities);

    var parsedCharacters = JSON.parse(characters);
    var parsedAbilities = JSON.parse(abilities);

    var engineer = parsedCharacters["Engineer"];
    log.info(engineer);
    log.info(engineer["id"]);

    var options = {};

    for (const key in parsedCharacters) {
        log.info(key);
        if (Object.hasOwnProperty.call(parsedCharacters, key)) {
            const element = parsedCharacters[key];
            log.info(element);
            // var name = element["name"];
            options[key] = parsedCharacters[key];
        }
    }

    return options;
}