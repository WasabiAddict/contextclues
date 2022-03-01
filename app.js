$(document).ready(function () {
    var friends = ['David', 'Daniel', 'Perry', 'Catherine', 'December'];
    var places = ['Florida', 'alabama', 'philly', 'atlanta', 'destin', 'panama city', 'place 1', 'longhorn', 'police station', 'pool']
    var weapons = ['pistol', 'knife', 'dagger', 'pea shooter', 'sword', 'brain', 'dog', 'fist', 'dumbbell', 'paper', 'pillow', 'mouse wheel', 'cheese', 'video game', 'weapon 1', 'my pants', 'vinyl', 'tuna', 'bread', 'water']


    for (var i = 1; i <= 100; i++) {
        var Accuse = $('<h3>Accusation ' + i + '<h3>');
        $(Accuse).appendTo($('#accusations'));
        $(Accuse).click(Alert(i));
    }



    function Alert(i) {
        var friend = friends[i % 5];
        var place = places[i % 10];
        var weapon = weapons[i % 20];
        function provideAlert() {
            alert('I accuse ' + friend + ' of murder in the ' + place + ' which he performed with the ' + weapon + '!');
        }
        return provideAlert;
    }
}); 