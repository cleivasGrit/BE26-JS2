let aa = [];
let banan = 0;
let zzz = 0;

document.body.innerHTML = `<h1>Trivia Quiz</h1><form id="k"><div><label for="q">Category</label><select id="q"><option value="23">History</option><option value="22">Geography</option><option value="27">Animals</option></select></div><div><label for="x">Level</label><select id="x"><option value="easy">Easy</option><option value="medium">Medium</option><option value="hard">Hard</option></select></div><div><label for="m">Number of questions</label><input type="number" id="m" min="1" max="10" value="3"></div><div><button>Start the quiz!</button></div></form><form id="u" class="hidden"><p></p><div><input type="radio" id="r1" name="answers" required><label for="r1"></label></div><div><input type="radio" id="r2" name="answers" required><label for="r2"></label></div><div><input type="radio" id="r3" name="answers" required><label for="r3"></label></div><div><input type="radio" id="r4" name="answers" required><label for="r4"></label></div><div><button>Go!</button></div></form><div id="n" class="hidden message"><p>You scored <span></span></p><p>The game will start over soon...</p></div><div id="v" class="hidden message"><p></p></div>`;

function h(t) {
    const y = document.createElement("textarea");
    y.innerHTML = t;
    return y.value;
}

function p(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

document.querySelector("#k").addEventListener("submit", async function(e) {
    e.preventDefault();
    zzz = 0;
    banan = 0;
    document.querySelector("#k").classList.add("hidden");
    const a = document.querySelector("#q").value;
    const b = document.querySelector("#x").value;
    const c = document.querySelector("#m").value;
    const r = await fetch(`https://opentdb.com/api.php?amount=${c}&category=${a}&difficulty=${b}&type=multiple`);
    const d = await r.json();
    aa = d.results;
    w();
});

document.querySelector("#u").addEventListener("submit", function(e) {
    e.preventDefault();
    const g = document.querySelector('input[name="answers"]:checked');
    const o = h(aa[banan].correct_answer);
    const l = g.value === o;
    if (l) {
        zzz++;
        document.querySelector("#v p").innerText = "Correct! 🎉";
    } else {
        document.querySelector("#v p").innerHTML = `Wrong answer... 😬<br>The correct answer is: <span>${o}</span>`;
    }
    g.checked = false;
    document.querySelector("#u").classList.add("hidden");
    document.querySelector("#v").classList.remove("hidden");
    setTimeout(function() {
        document.querySelector("#v").classList.add("hidden");
        banan++;
        if (banan < aa.length) {
            w();
        } else {
            document.querySelector("#n span").innerText = `${zzz} / ${aa.length}`;
            document.querySelector("#n").classList.remove("hidden");
            setTimeout(function() {
                document.querySelector("#n").classList.add("hidden");
                document.querySelector("#k").classList.remove("hidden");
            }, 5000);
        }
    }, 2000);
});

function w() {
    document.querySelector("#u p").innerText = h(aa[banan].question);
    const f = p([...aa[banan].incorrect_answers, aa[banan].correct_answer]);
    const i = document.querySelectorAll("#u input");
    const j = document.querySelectorAll("#u label");
    f.forEach(function(s, q) {
        j[q].innerText = h(s);
        i[q].value = h(s);
    });
    document.querySelector("#u").classList.remove("hidden");
}
