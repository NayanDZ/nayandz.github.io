function fun() {
        let inputPswd = document.getElementById("validate")
                                .value;
        let correctPswd = "nanohack";
        if (inputPswd === correctPswd) {
            document.getElementById("container")
                .style.display = "block";
            document.getElementById("pswd")
                .style.display = "none";
        } else {
            alert("Incorrect password!");
        }
    }