# Install dependencies

$ yarn install

# Create database table

Create table `assessment` with `name` and `monthly_salary` columns

# Insert Data

```bash
INSERT INTO `staffs` (`name`, `monthly_salary`) VALUES
('johnny', '10000.00'),
('teh', '7654.00'),
('abdul razak', '30000.00'),
('johnny may', '100.00');

```

# Start service

$ yarn start

# Get Data

Open Postman with `get` method and hit the endpoint `http://127.0.0.1:4000`

# Update Data

Open Postman with `put` method and hit the endpoint `http://127.0.0.1:4000`
body with Json format

```bash
{
    "name": "johnny",
    "monthly_salary": "5000"
}
```
