function getZodiacSign() {
      const month = document.getElementById('month').value;
      const day = document.getElementById('day').value;
      const zodiacSigns = [
        'Capricorn', 'Aquarius', 'Pisces', 'Aries',
        'Taurus', 'Gemini', 'Cancer', 'Leo',
        'Virgo', 'Libra', 'Scorpio', 'Sagittarius'
      ];
      const cutoffDates = [20, 19, 20, 20, 21, 21, 22, 23, 23, 23, 22, 21];
      const zodiacIndex = (day > cutoffDates[month - 1]) ? month : month - 1;
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = `Your Zodiac Sign is ${zodiacSigns[zodiacIndex]}.`;
    }

    // Populate days for each month
    const monthElement = document.getElementById('month');
    const dayElement = document.getElementById('day');
    const daysByMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    monthElement.addEventListener('change', function() {
      const selectedMonth = this.value;
      const numDays = daysByMonth[selectedMonth - 1];
      dayElement.innerHTML = '';
      for (let i = 1; i <= numDays; i++) {
        const option = document.createElement('option');
        option.text = i < 10 ? `0${i}` : `${i}`;
        option.value = i < 10 ? `0${i}` : `${i}`;
        dayElement.appendChild(option);
 }
    });
