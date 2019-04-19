DROP TABLE IF EXISTS swrpg.char, swrpg.skill, swrpg.player, swrpg.character, swrpg.skill_char_override;

--CREATE SCHEMA swrpg;

--IRL Tables
	CREATE TABLE swrpg.player (
		id serial PRIMARY KEY, 
		name text, 
		email text,
		passwordHash text
	);
	
	CREATE TABLE swrpg.group (
		id serial PRIMARY KEY, 
		name text,
		gm int, --FOREIGN KEY CONSTRAINT to player.id
	);
	
	CREATE TABLE swrpg.group_player (
		player_id int, --FOREIGN KEY CONSTRAINT to player.id
		group_id int --FOREIGN KEY CONSTRAINT to group.id
		--COMBO KEY RESTRAINT NEEDED
	);
	
	
--Skills & Characteristics
	--Base Characteristics Table
	CREATE TABLE swrpg.char (
		id int PRIMARY KEY, 
		name text
	);

	--Base Skill Table
	CREATE TABLE swrpg.skill (
		id int PRIMARY KEY, 
		name text, 
		char_id int --FOREIGN KEY CONSTRAINT to char.id
	);

	--Table Used for Overriding the base char used for a skill (like a lightsaber fighting style)
	CREATE TABLE swrpg.skill_char_override (
		skill_id int, --FOREIGN KEY CONSTRAINT to skill.id
		char_id int --FOREIGN KEY CONSTRAINT to char.id
		--COMBO KEY RESTRAINT NEEDED
	);


--Character Data
CREATE TABLE swrpg.character (
	id int PRIMARY KEY, 
	character_name text,
	player_id
);



--
--
--select * from characteristic
