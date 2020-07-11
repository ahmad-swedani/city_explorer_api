
CREATE TABLE locations(
ID SERIAL PRIMARY KEY,
search_query VARCHAR(255),
formatted_query VARCHAR(255),
latitude VARCHAR(255),
longitude VARCHAR(255)
);

-- insert into locations(search_query,formatted_query,latitude,longitude) values ('amman','tezy','anything','swedani');
