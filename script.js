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

    log.info(parsedCharacters);
    log.info(parsedAbilities);

    var engineer = parsedCharacters[2];
    log.info(engineer);
    log.info(engineer["id"]);

    var options = {};

    for (const key in parsedCharacters) {
        log.info(key);
        if (Object.hasOwnProperty.call(parsedCharacters, key)) {
            const element = parsedCharacters[key];
            log.info(element.id);
            var name = element.name;
            options[id] = parsedCharacters[key];
        }
    }

    return options;
}