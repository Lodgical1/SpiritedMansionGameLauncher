const uaup = require('uaup-js');

const defaultStages = {
    Checking: "Checking For Updates!", // When Checking For Updates.
    Found: "Update Found!",  // If an Update is Found.
    NotFound: "No Update Found.", // If an Update is Not Found.
    Downloading: "Downloading...", // When Downloading Update.
    Unzipping: "Installing...", // When Unzipping the Archive into the Application Directory.
    Cleaning: "Finalizing...", // When Removing Temp Directories and Files (ex: update archive and tmp directory).
    Launch: "Launching..." // When Launching the Application.
};




const updateOptions = {
    useGithub: true, // {Default is true} [Optional] Only Github is Currenlty Supported.
    gitRepo: "SpiritedMansionGameLauncher", // [Required] Your Repo Name
    gitUsername: "Lodgical1",  // [Required] Your GitHub Username.

    appName: "Spirited Mansion Launcher", //[Required] The Name of the app archive and the app folder.
    appExecutableName: "SpiritedMansion.exe", //[Required] The Executable of the Application to be Run after updating.
};