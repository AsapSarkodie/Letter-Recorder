CREATE TABLE IF NOT EXISTS admins (
  id            SERIAL PRIMARY KEY,
  username      TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS letters (
  id            SERIAL PRIMARY KEY,
  date_received DATE NOT NULL,          -- the day the letter came to the office
  sender        TEXT NOT NULL,          -- person or department it is from
  letter_date   DATE,                   -- the date written on the letter
  subject       TEXT NOT NULL,          -- subject or title on the letter
  image_file    TEXT UNIQUE,            -- scan/photo kept in /uploads
  recorded_by   INTEGER REFERENCES admins(id) ON DELETE SET NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS letters_date_received_idx ON letters (date_received);
CREATE INDEX IF NOT EXISTS letters_letter_date_idx   ON letters (letter_date);
