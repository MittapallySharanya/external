const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

let registrations = [];

app.post("/api/register", (req, res) => {
    const {
        name,
        email,
        phone,
        college,
        event
    } = req.body;

    if (!name || !email || !phone || !college || !event) {
        return res.status(400).json({
            message: "All required fields must be filled"
        });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({
            message: "Invalid email"
        });
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        return res.status(400).json({
            message: "Phone number must contain 10 digits"
        });
    }

    const registration = {
        id: registrations.length + 1,
        name,
        email,
        phone,
        college,
        event
    };

    registrations.push(registration);

    res.status(201).json({
        message: "Registration successful",
        registration
    });
});

app.get("/api/registrations", (req, res) => {
    res.json(registrations);
});

app.get("/api/registrations/:id", (req, res) => {
    const registration = registrations.find(
        r => r.id === Number(req.params.id)
    );

    if (!registration) {
        return res.status(404).json({
            message: "Registration not found"
        });
    }

    res.json(registration);
});

app.delete("/api/registrations/:id", (req, res) => {
    const id = Number(req.params.id);

    registrations = registrations.filter(r => r.id !== id);

    res.json({
        message: "Registration deleted"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
