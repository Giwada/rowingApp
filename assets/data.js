const Data = [
    {
        id: 1,
        name: 'Taro Yamada',
        image: require('../assets/images/boat1.jpg'),
        bio: 'I am focusing on Scull-rowing',
        club: 'ABC Rowing Club',
        tool: '1x, 2x, 4x',
        date: '21st June',
        location: 'Toda',
        trainingTitle: 'UT 24km',
        trainings: [
            {
                date: 'AM 21st July',
                avgSpeed: '18 km/h',
                stroke_rate: {
                    '< SR 18': '15',
                    'SR 18 - 24': '20',
                    'SR 24 - 30': '20',
                    'SR 30 <': '45',
                },
                avg_rate: '28.5',
                tilt: '23.456',
                vibration: '100 HZ', 
                timer: '06:29:07',
            },
            {
                date: 'PM 21st July',
                avgSpeed: '21 km/h',
                stroke_rate: {
                    '< SR 18': '20',
                    'SR 18 - 24': '15',
                    'SR 24 - 30': '45',
                    'SR 30 <': '20',
                },
                tilt: '11.234',
                vibration: '230 HZ', 
                timer: '06:21:55',
            },
        ],     
        boats: [
            {
                name: '1x - main',
                image: require('../assets/images/boat1.jpg'),
            },
            {
                name: '1x - sub',
                image: require('../assets/images/boat2.jpg'),
            },

        ]
    },
    

];

export default Data;