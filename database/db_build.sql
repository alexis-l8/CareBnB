BEGIN;

DROP TABLE IF EXISTS HomeownerProfile, HomeownerPreferences, HomeseekerProfile CASCADE;


CREATE TABLE HomeownerProfile (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  surname VARCHAR(30) NOT NULL,
  age INTEGER NOT NULL,
  gender VARCHAR(10) NOT NULL,
  postcode VARCHAR(10) NOT NULL,
  longitude DOUBLE PRECISION NOT NULL,
  latitude DOUBLE PRECISION NOT NULL,
  pets VARCHAR(100) NOT NULL,
  smoker BOOLEAN,
  level_of_care INTEGER NOT NULL,
  room_type VARCHAR(20) NOT NULL

);

INSERT INTO HomeownerProfile(first_name, surname, age, gender, postcode, longitude, latitude, pets, smoker, level_of_care, room_type) VALUES
('Barbara', 'Salister', 71, 'female', 'E3 5RF', -0.038538, 51.532131, '4 dogs', 'yes', 1, 'Double'),
('Edward', 'Jacobs', 74, 'male', 'E3 5DW', -0.038366, 51.530649, '2 cats', 'yes', 5, 'Single'),
('Allen', 'Walsh', 70, 'male', 'E3 5BS', -0.038066, 51.528086, 'none', 'no', 3, 'Single');




CREATE TABLE HomeownerPreferences (
  id SERIAL PRIMARY KEY NOT NULL,
  pets_allowed BOOLEAN NOT NULL,
  smoking_allowed BOOLEAN NOT NULL,
  gender VARCHAR(10) NOT NULL,
  cooking BOOLEAN,
  cleaning BOOLEAN,
  shopping BOOLEAN,
  computer_assistance BOOLEAN,
  hours_needed INTEGER NOT NULL,
  homeowner INTEGER REFERENCES HomeownerProfile(id)
);

INSERT INTO HomeownerPreferences(pets_allowed, smoking_allowed, gender, cooking, cleaning, shopping, computer_assistance, hours_needed, homeowner) VALUES
('yes', 'no', 'male', 'yes', 'no', 'no', 'yes', 10, 1),
('no', 'yes', 'female', 'no', 'yes', 'yes', 'no', 18, 2),
('no', 'no', 'male', 'yes', 'no', 'yes', 'no', 5, 3);


CREATE TABLE HomeseekerProfile (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  surname VARCHAR(30) NOT NULL,
  gender VARCHAR(10) NOT NULL,
  age INTEGER NOT NULL,
  hours_available INTEGER NOT NULL, 
  occupation VARCHAR(30) NOT NULL
  children INTEGER NOT NULL,
  smoker BOOLEAN,
  pets VARCHAR(100) NOT NULL
);

COMMIT;
