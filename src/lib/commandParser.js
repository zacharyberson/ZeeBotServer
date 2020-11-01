const { commands } = require('./commands.js');

const processCommand = (target, command) => {
    const commandParts = command.split(' ', 2);
    const commandName = commandParts[0];
    const commandQuery = commandParts.length > 1 ? commandParts[1] : '';

    // If the command is known, let's execute it
    if(Object.keys(commands).includes(commandName)) {
        try {
            commands[commandName](target, commandQuery);
        } catch(e) {
            console.error(e);
        }
    
        console.log(`* Executed ${commandName} command`);
    } else {
        return;
    }
}

exports.processCommand = processCommand;