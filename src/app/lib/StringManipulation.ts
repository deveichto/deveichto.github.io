import { assets } from "../assets/assets";

export function ProjectSkillsToIcons(data: string) { 
    const splitData = data.split("|");
    for (let s = 0; s < splitData.length; s++)
    {
        if (splitData[s] == "PHP") {
            return assets.php;
        }
    }
}