// Starter data
const settings = {
  darkMode: true,
  notifications: false,
  autoSave: true,
  spellCheck: false,
  grammarCheck: true
};


const entries = Object.entries(settings);

const enabledEntries = entries.filter(([_, value]) => value === true);


const tCount = enabledEntries.length;


const listItems = enabledEntries.map(([key]) => `<li>${key}: true</li>`).join("");


document.getElementById("settingsList").innerHTML = listItems;
document.getElementById("count").innerHTML = `Total Enabled: ${tCount}`;

