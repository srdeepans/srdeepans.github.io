// User data for login validation
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
];

// View password
document.addEventListener('DOMContentLoaded', function() {
    const eyeIcon = document.querySelector('.eye-icon');
    const passwordField = document.querySelector('#password');

    if (eyeIcon && passwordField) {
        eyeIcon.addEventListener('click', function() {
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            eyeIcon.classList.toggle('fa-eye-slash');
            eyeIcon.classList.toggle('fa-eye');
        });
    }
});

// check Username/Email and Password are valid or not
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
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
    }
});

// logout option
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.user-dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if (dropdown && dropdownMenu) {
        dropdown.addEventListener('click', function() {
            dropdownMenu.classList.toggle('show');
        });

        document.addEventListener('click', function(event) {
            if (!dropdown.contains(event.target)) {
                dropdownMenu.classList.remove('show');
            }
        });
    }
});

// Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function(event) {
            const requiredFields = form.querySelectorAll('[required]');
            let valid = true;

            requiredFields.forEach(function(field) {
                if (!field.value) {
                    field.classList.add('invalid');
                    valid = false;
                } else {
                    field.classList.remove('invalid');
                }
            });

            if (!valid) {
                event.preventDefault();
                alert('Please fill out all required fields.');
            }
        });
    }
});

// Audience Chart
document.addEventListener('DOMContentLoaded', function() {
    var ctxBar = document.getElementById('audienceChart').getContext('2d');
    var audienceChart = new Chart(ctxBar, {
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
});

// Popup Card for Map
document.addEventListener('DOMContentLoaded', function() {
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
        area.addEventListener('click', function(event) {
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

// top used Devices chart
document.addEventListener('DOMContentLoaded', function() {
    var ctxDoughnut = document.getElementById('devicesChart').getContext('2d');
    var devicesChart = new Chart(ctxDoughnut, {
        type: 'doughnut',
        data: {
            labels: [
                'iPhone 14,3 (45%)',
                'iPhone 13,3 (20%)',
                'iPhone 12,3 (12%)',
                'iPhone 11,3 (13%)',
                'iPhone 10,3 (10%)'
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
                }
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

                ctx.restore();
                ctx.font = "bold 16px sans-serif";
                ctx.textBaseline = "middle";
                var text = "1223";
                var textX = Math.round((width - ctx.measureText(text).width) / 2) + 75;
                var textY = height / 2;

                ctx.fillText(text, textX, textY);
                ctx.font = "normal 10px sans-serif";
                var subtext = "Total Users";
                var subtextX = Math.round((width - ctx.measureText(subtext).width) / 2) + 75;
                var subtextY = height / 2 + 19;

                ctx.fillText(subtext, subtextX, subtextY);
                ctx.save();
            }
        }]
    });
});


function drop_down() {
    const menu = document.querySelector('.dropdown-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

var ctx = document.getElementById('audienceChartPage').getContext('2d');
var audienceChartPage = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 6', 'Mar 7', 'Mar 8', 'Mar 9', 'Mar 10', 'Mar 11', 'Mar 12', 'Mar 13', 'Mar 14', 'Mar 15', 'Mar 16', 'Mar 17', 'Mar 18', 'Mar 19', 'Mar 20', 'Mar 21', 'Mar 22', 'Mar 23', 'Mar 24', 'Mar 25', 'Mar 26', 'Mar 27', 'Mar 28', 'Mar 29', 'Mar 30', 'Mar 31'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [24, 20, 1, -7, 32, 10, 37, 10, 36, 34, 0, 7, 31, 5, 37, 1, 0, 25, 0, 0, 15, 0, 0, 15, 20, 30, 25, 40, 10, 15],
                borderColor: '#e0bdaa',
                backgroundColor: 'e0bdaa',
                pointBackgroundColor: '#e0bdaa',
                pointBorderColor: '#e0bdaa',
                pointRadius: 5,
                pointHoverRadius: 7,
                tooltip: {
                    enabled: true,
                    backgroundColor: '#e0bdaa',
                    titleFont: {
                        size: 14,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 12
                    },
                    callbacks: {
                        label: function (tooltipItem) {
                            return tooltipItem.raw;
                        }
                    }
                },
            },
            {
                label: 'Dataset 2',
                data: [10, 25, 24, 9, 0, 14, 0, 42, 40, 8, 15, 19, 20, 24, 15, 38, 6, 38, 20, 20, 6, 5, 9, 5, 10, 20, 12, 28, 14, 19],
                borderColor: '#333333',
                backgroundColor: '#000000',
                pointBackgroundColor: '#333333',
                pointBorderColor: '#333333',
                pointRadius: 5,
                pointHoverRadius: 7,
                tooltip: {
                    enabled: true,
                    backgroundColor: '#000000',
                    titleFont: {
                        size: 14,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 12
                    },
                    callbacks: {
                        label: function (tooltipItem) {
                            return tooltipItem.raw;
                        }
                    }
                },
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    maxRotation: 0,
                    minRotation: 0
                }
            },
            y: {
                grid: {
                    color: '#e0e0e0',
                    drawBorder: false,
                    drawOnChartArea: true,
                    drawTicks: false,
                },
                beginAtZero: true,
                max: 50
            }
        }
    }
});


var retentionCtx = document.getElementById('retentionChart').getContext('2d');
var retentionChart = new Chart(retentionCtx, {
    type: 'bar',
    data: {
        labels: ['', ''],
        datasets: [
            {
                label: 'Retention in %',
                data: [5, 4],
                backgroundColor: '#bf8677',
                borderColor: '#bf8677',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top'
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                title: {
                    display: true,
                    text: ''
                }
            },
            y: {
                grid: {
                    color: '#e0e0e0',
                    drawBorder: false,
                    drawOnChartArea: true,
                    drawTicks: false
                },
                beginAtZero: true,
                title: {
                    display: true,
                    text: ''
                },
                ticks: {
                    stepSize: 1
                }
            }
        }
    }
});