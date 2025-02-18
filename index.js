// Simple Task Scheduler with Logging

const fs = require('fs');
const path = require('path');

// Log file path
const logFile = path.join(__dirname, 'task_log.txt');

// Function to log messages




function logMessage(message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}\n`;
    fs.appendFile(logFile, logEntry, (err) => {
        if (err) console.error('Error writing to log file:', err);
    });
}

// Simulated tasks
function taskOne() {
    logMessage('Task One executed.');
    console.log('Task One executed.');
}

function taskTwo() {
    logMessage('Task Two executed.');
    console.log('Task Two executed.');
}

function taskThree() {
    logMessage('Task Three executed.');
    console.log('Task Three executed.');
}

// Schedule tasks
setInterval(taskOne, 5000); // Every 5 seconds
setInterval(taskTwo, 10000); // Every 10 seconds
setInterval(taskThree, 15000); // Every 15 seconds

// Initial log message
logMessage('Task Scheduler started.');
console.log('Task Scheduler started.');





// Stop after 1 minute
setTimeout(() => {
    logMessage('Task Scheduler stopped.');
    console.log('Task Scheduler stopped.');
    process.exit(0);
}, 60000);
