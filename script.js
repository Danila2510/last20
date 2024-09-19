import {Buffer} from "node:buffer"
import path from "node:path";
import fs from "node:fs";
import { log } from "node:console";

const buff_1 = Buffer.from("Hello Node.js!");
log(buff_1.toString());
const __dirname = import.meta.dirname;
const my_dir = path.join(__dirname, "files")
if (!fs.existsSync(my_dir))
{
    fs.mkdirSync(my_dir);
}
const our_file_1 = path.join(my_dir, "1.txt");
fs.writeFileSync(our_file_1, buff_1);


const buff_2 = Buffer.from("Never gonna give you up , Never gonna let you down , Never gonna run around and desert you.");
if (!fs.existsSync(my_dir))
{
    fs.mkdirSync(my_dir);
}
const our_file_2 = path.join(my_dir, "2.txt");
fs.writeFileSync(our_file_2, buff_2);
const content_2 = fs.readFileSync(our_file_2);
log(content_2.toString());


process.stdin.setEncoding('utf8');

process.stdin.on('data', (input) => {
    const inputString = input.trim();
    const buffer = Buffer.from(inputString);
    console.log("Buff:", buffer);
    const backToString = buffer.toString();
    console.log("Colun:", backToString);
    process.exit();
});


const buff_4_1 = Buffer.from("Never deserve you ");
const buff_4_2 = Buffer.from("And hurt you");
const buff_4 = Buffer.concat([buff_4_1, buff_4_2]);
if (!fs.existsSync(my_dir))
{
    fs.mkdirSync(my_dir);
}
const our_file_4 = path.join(my_dir, "4.txt");
fs.writeFileSync(our_file_4, buff_4);
const content_4 = fs.readFileSync(our_file_4);
log(content_4.toString());
