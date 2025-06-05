Daisy Clock
Daisy Clock is a minimalistic desktop clock application built with React and Electron, featuring a daisy flower design. It includes timer, stopwatch, and alarm functionalities, with a transparent, frameless window that stays on top of other applications.
Features

Daisy Flower Design: A custom SVG daisy with interactive petals to switch between modes (clock, timer, stopwatch, alarm).
Modes:
Clock: Displays the current time using the Orbitron font.
Timer: Set a countdown timer.
Stopwatch: Track elapsed time.
Alarm: Set an alarm with notifications.


Interactive Petals: Hover over petals to see tooltips (e.g., "Timer," "Stopwatch," "Alarm") and click to switch modes.
Hover Banner: A banner with minimize and close buttons appears when hovering over the daisy.
Window Properties:
Size: 240x192 pixels (approximately 2x2 inches).
Transparent and frameless design.
Always on top of other windows.



Installation
For Users

Download the installer for your platform:
Windows: Daisy Clock Setup.exe (available in releases).
macOS: Daisy Clock.dmg (available in releases, requires a macOS machine to build).
Linux: Daisy Clock.AppImage (available in releases, requires a Linux machine to build).


Run the installer and follow the on-screen instructions.
Launch the app to start using Daisy Clock.

For Developers

Clone the repository:git clone <your-repo-url>
cd daisy-clock


Install dependencies:npm install


Start the app in development mode:npm run electron-dev


Build and package the app:npm run package



Usage

Switch Modes: Hover over the daisy petals to see tooltips, then click a petal to switch between clock, timer, stopwatch, or alarm.
Minimize/Close: Hover over the daisy to reveal the banner, then click the minimize or close button.
Always On Top: The app stays on top of other windows for easy access.

Screenshots
(Tip: Add screenshots of the app in action by placing images in a screenshots/ folder and linking them here, e.g., ![Daisy Clock](screenshots/daisy-clock.png).)
Development

Tech Stack:
Frontend: React for the UI, with a custom SVG for the daisy design.
Backend: Electron for creating the desktop app.
Styling: CSS for layout and hover effects.


Directory Structure:
src/: React components and assets.
public/: Static assets like icons and fonts.
build/: Output of the React build, including electron.js (copied from main.js).
dist/: Packaged app output.



Contributing

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

License
MIT License (or specify your preferred license).
Acknowledgments

Orbitron font for the clock display.
Electron and React communities for their amazing tools.

