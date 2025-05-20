
import { Skill } from './skill.model';
import { TSkill } from './skill.interface';

const createSkillIntoDB = async (payload: TSkill) => {
  const result = await Skill.create(payload);
  return result;
};

const getAllSkills = async () => {
  const result = await Skill.find();
  return result;
};

const deleteSkill = async (id: string) => {
  const result = await Skill.findByIdAndDelete(id);
  return result;
};

export const SkillServices = {
  createSkillIntoDB,
  deleteSkill,
  getAllSkills
};
