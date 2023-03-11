function getClickFunc(){
                let counter = 0;
                return function(){
                    counter = counter + 1
                    document.getElementById('clicker__counter').textContent = counter
                    document.getElementById('cookie').width = 200 + 20*(counter % 2)
                }
                }
               const cookie = document.getElementById("cookie")
               cookie.onclick = getClickFunc()