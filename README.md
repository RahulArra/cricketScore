

# Cricket Scoreboard Web Application

A responsive and interactive cricket scoreboard web application built with HTML, CSS, and JavaScript.

## Features

- **Live Score Tracking**: Real-time updates of team score, wickets, and overs
- **Player Statistics**: Individual player scores, balls faced, fours, sixes, and strike rates
- **Striker Indicator**: Visual indicator showing the current striker with a star symbol
- **Run Management**: Buttons for scoring runs (0, 1, 2, 3, 4, 6)
- **Wicket Tracking**: Record wickets and LBW dismissals
- **Extras Management**: Track wide balls, no balls, byes, leg byes
- **Free Hit Implementation**: Automatic free hit awarding after no balls
- **Striker Rotation**: Manual striker switching and automatic rotation after odd runs and over completion
- **Match Statistics**: Display of current run rate, total balls, and extras
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Reset Functionality**: Complete match reset capability

## Files Structure




## How to Use

1. Open `index.html` in a web browser
2. Use the buttons to record match events:
   - **Run Buttons**: Record runs scored (0, 1, 2, 3, 4, 6)
   - **Wicket Buttons**: Record wickets and LBW dismissals
   - **Extra Buttons**: Record extras (wide, no ball, bye, leg bye)
   - **Free Hit Button**: Manually activate free hit (though it activates automatically after no balls)
3. The striker will automatically change:
   - After odd-numbered runs
   - At the end of each over (after 6 balls)
4. Use the "Switch Striker" button to manually change strikers
5. Use the "Reset Match" button to start a new game

## Technical Details

### HTML Structure
- Semantic HTML5 elements for better accessibility
- Responsive grid layout for buttons
- Properly structured player information sections

### CSS Features
- Modern CSS with Flexbox and Grid layouts
- Responsive design with media queries
- CSS animations for visual feedback
- Gradient backgrounds and shadow effects
- Custom styling for different match events

### JavaScript Functionality
- Game state management object
- Event listeners for all interactive elements
- Automated striker rotation logic
- Score calculation and validation
- Real-time UI updates

## Browser Compatibility

This web application works on all modern browsers including:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Customization

### Changing Team/Player Names
Edit the `gameState.players` array in the JavaScript section of `index.html`:




### Adding New Features
The modular JavaScript code makes it easy to extend functionality. Add new event handlers to the `document.querySelectorAll('.btn')` loop.

## Future Enhancements

Potential features for future versions:
- Session management (save/load matches)
- More detailed statistics
- Multiple match types (Test, ODI, T20)
- Player database
- Over-by-over commentary
- Scoreboard themes

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

This project is created for educational purposes as part of an EAD assignment.

## Credits

Developed by Rahul for Chaitanya Bharathi Institute of Technology.

---
