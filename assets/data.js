module.exports = [
    {
        id: 1,
        name: 'Taro Yamada',
        image: require('../assets/images/user-001.jpg'),
        bio: 'I am focusing on Scull-rowing',
        club: 'ABC Rowing Club',
        tool: '1x, 2x, 4x',
        training: {
            avgSpeed: '18 km/h',
            stroke_rate: {
                '< SR 18': '15',
                'SR 18 - 24': '20',
                'SR 24 - 30': '20',
                'SR 30 <': '45',
            },
            tilt: '23.456',
            vibration: '100 HZ', 
            timer: '06:29:07',
        },     
        boat: {
            name: '1x - main',
            image: require('../assets/images/boat-001.jpg'),
        },
    },
];