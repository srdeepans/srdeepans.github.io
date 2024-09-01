// username and password data
const users = [
    {
        "username": "textperson",
        "email": "text@gmail.com",
        "password": "text@123"
    },
    {
        "username": "admin",
        "email": "admin@gmail.com",
        "password": "admin@123"
    },
    {
        "username": "test",
        "email": "test@gmail.com",
        "password": "test@123"
    }
]

// see the password
function view_pass() {
    var icon = document.getElementById('toggle-icon')
    const passwordField = document.querySelector('#password')
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password'
    passwordField.setAttribute('type', type)
}

// validate correct suername/email address and password
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const usernameInput = document.getElementById('username').value.trim();
        const passwordInput = document.getElementById('password').value.trim();

        const user = users.find(user =>
            (user.username === usernameInput || user.email === usernameInput) &&
            user.password === passwordInput
        );

        if (user) {
            alert('Login successful!');
            window.location.href = 'dashboard.html';
        } else {
            alert('Please check your login and password.');
        }
    });
});


function drop_down() {
    console.log("clicked")
    var dropdownMenu = document.querySelector('.dropdown-menu')
    if (dropdownMenu.style.display === 'none') {
        dropdownMenu.style.display = 'block'
    } else {
        dropdownMenu.style.display = 'none'
    }
}

// Audience Chart
var ctx = document.getElementById('audienceChart').getContext('2d');
var audienceChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Active Users',
            data: [2, 35, 8, 28, 22, 32, 35, 18, 23, 3, 16, 19],
            backgroundColor: '#e7cdc0',
            barPercentage: 0.8,
            categoryPercentage: 0.6
        }, {
            label: 'Registered Users',
            data: [28, 39, 40, 30, 40, 49, 26, 34, 14, 35, 35, 26],
            backgroundColor: '#e0bdaa',
            barPercentage: 0.8,
            categoryPercentage: 0.6

        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    boxWidth: 10,
                    padding: 40,
                    font: {
                        size: 12
                    }
                }
            }
        },
        scales: {
            x: {
                stacked: false,
                barPercentage: 0.8,
                categoryPercentage: 1,
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    drawBorder: false,
                    drawOnChartArea: true,
                    drawTicks: false,
                    color: 'rgba(0,0,0,0.1)',
                },
                ticks: {
                    stepSize: 10
                }
            }
        }
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const popupCard = document.getElementById('popupCard');
    const popupContent = document.getElementById('popupContent');

    function showPopup(name, regUsers, activeUsers) {
        popupContent.innerHTML = `<strong>${name}</strong><br>Registered Users: <b>${regUsers}</b><br>Active Users: <b>${activeUsers}</b>`;
        popupCard.style.display = 'block';
    }
    function hidePopup() {
        popupCard.style.display = 'none';
    }

    document.querySelectorAll('area').forEach(area => {
        area.addEventListener('click', function (event) {
            event.preventDefault();
            const name = this.getAttribute('alt');
            const regUsers = this.getAttribute('data-reg');
            const activeUsers = this.getAttribute('data-active');
            const coords = this.getAttribute('coords').split(',');
            popupCard.style.left = `${parseInt(coords[0]) + 1}%`;
            popupCard.style.top = `${parseInt(coords[1]) + 1}%`;
            showPopup(name, regUsers, activeUsers);
        });
    });

    popupCard.addEventListener('click', hidePopup);
});




var ctx3 = document.getElementById('devicesChart').getContext('2d')
var devicesChart = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: [
            'iPhone 14,3 (45%)               ',
            'iPhone 13,3 (20%)               ',
            'iPhone 12,3 (12%)               ',
            'iPhone 11,3 (13%)               ',
            'iPhone 10,3 (10%)                '
        ],
        datasets: [{
            label: 'Top 5 Devices',
            data: [45, 20, 12, 13, 10],
            backgroundColor: ['#c08776', '#e7cdc0', '#e7cdc1', '#dfbdab', '#f7edeb'],
            borderColor: '#fff',
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'left',
                labels: {
                    boxWidth: 15,
                    boxHeight: 15,
                    padding: 10,
                    font: {
                        size: 13
                    }
                }
            },
            tooltip: {
                enabled: true,
            }
        },
        layout: {
            padding: {
                top: 0,
                bottom: 0,
                left: 10,
                right: 20
            },
        },
        elements: {
            arc: {
                borderWidth: 20
            }
        },

        cutout: '78%'

    },
    plugins: [{
        beforeDraw: function (chart) {
            var width = chart.width,
                height = chart.height,
                ctx = chart.ctx;

            ctx.restore()
            ctx.font = "bold 16px sans-serif"
            ctx.textBaseline = "middle"
            var text = "1223"
            var textX = Math.round((width - ctx.measureText(text).width) / 2) + 75
            var textY = height / 2

            ctx.fillText(text, textX, textY)
            ctx.font = "normal 10px sans-serif"
            var subtext = "Total Users"
            var subtextX = Math.round((width - ctx.measureText(subtext).width) / 2) + 75
            var subtextY = height / 2 + 19

            ctx.fillText(subtext, subtextX, subtextY)
            ctx.save()
        }
    }]
});






