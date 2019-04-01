const participants = [
  '이정도',
  '김재완',
  '박지혜',
  '박동휘',
  '정지훈',
  '한혜경'
];

const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    // get random index
    const j = Math.floor(Math.random() * (i + 1));
    // switch position
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const shuffledParticipants = shuffle(participants);
const team1 = [];
const team2 = [];

for (let i = 0; i < shuffledParticipants.length; i++) {
  if (i < Math.floor(shuffledParticipants.length / 2)) {
    team1.push(shuffledParticipants[i]);
  } else {
    team2.push(shuffledParticipants[i]);
  }
}

console.log('Team 1:', team1.join(', '));
console.log('Team 2:', team2.join(', '));
