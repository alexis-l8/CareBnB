BEGIN;

DROP TABLE IF EXISTS HomeownerProfile, HomeownerPreferences, HomeseekerProfile CASCADE;


CREATE TABLE HomeownerProfile (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  surname VARCHAR(30) NOT NULL,
  age INTEGER NOT NULL,
  gender VARCHAR(15) NOT NULL,
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
('Jean', 'Adams', 74, 'female', 'E3 5DW', -0.038366, 51.530649, '2 cats', 'yes', 5, 'Single'),
('Allen', 'Walsh', 70, 'male', 'E3 5BS', -0.038066, 51.528086, 'none', 'no', 3, 'Single'),
('David', 'Gutenburg', 75, 'male', 'E13 9HD', 0.029298, 51.527348, '1 cat', 'no', 1, 'Double'),
('Margaret', 'Bing', 72, 'female', 'N1 0AA', -0.117931, 51.527098, '2 guinea pigs 1 rat 5 hamsters', 'yes', 2, 'Single'),
('Irene and John', 'Wicombe', 68, 'male & female', 'N10 1DW',  -0.142960, 51.592203, '1 owl', 'no', 3, 'Double');


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
  likes VARCHAR(100) NOT NULL,
  homeowner INTEGER REFERENCES HomeownerProfile(id)
);

INSERT INTO HomeownerPreferences(pets_allowed, smoking_allowed, gender, cooking, cleaning, shopping, computer_assistance, hours_needed, likes, homeowner) VALUES
('yes', 'no', 'male', 'yes', 'no', 'no', 'yes', 10, 'Salsa dance with Martin', 1),
('no', 'yes', 'female', 'no', 'yes', 'yes', 'no', 20, 'Have a nice meal besides the fire', 2),
('no', 'no', 'male', 'yes', 'no', 'yes', 'no', 5,'Enjoys watching new films', 3),
('yes', 'no', 'female', 'yes', 'no', 'yes', 'no', 5, 'Enjoys the company of young people', 4),
('yes', 'yes', 'either', 'no', 'yes', 'no', 'yes', 10, 'Discipline young children', 5),
('no', 'yes', 'either', 'no', 'yes', 'no', 'yes', 15, 'Stare outside the window', 6);





CREATE TABLE HomeseekerProfile (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  surname VARCHAR(30) NOT NULL,
  gender VARCHAR(10) NOT NULL,
  date_of_birth DATE NOT NULL,
  hours_available INTEGER NOT NULL,
  occupation VARCHAR(30) NOT NULL,
  children INTEGER NOT NULL,
  smoker BOOLEAN,
  pets VARCHAR(100) NOT NULL
);

COMMIT;
