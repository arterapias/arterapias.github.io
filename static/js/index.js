function remove_body_preload() {
	setTimeout(function() {
	    document.body.className="";
	    console.log("teste")
	}, 500);
}

function flip_hero() {
    imgs = document.querySelectorAll(".hero img");
    counter = 1

    setInterval(function() {
        for (i = 0; i < imgs.length; i++) {
            if (counter == i) {
                imgs[i].classList.add("show");
            } else {
                imgs[i].classList.remove("show");
            }
            
        }
        
        counter++;

        if (counter >= imgs.length) {
            counter = 0;
        }
    }, 3500)
}

function itypeed() {
    ityped.init('.typed', {
        strings:['ARTERAPIAS', 'RRRRUAAA!', 'GGGRRRRR!'],
        startDelay: 400,
        backDelay: 1000,
        loop: true
    });
}

docReady(() => {
	remove_body_preload();
    flip_hero();
    itypeed();
})
