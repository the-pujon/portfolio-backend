import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Profile } from "./profile.interface";
import ProfileModel from "./profile.model";

const createProfile = async (payload: Partial<Profile>): Promise<Profile> => {
  const result = await ProfileModel.create(payload);
  return result;
};

const getProfileById = async (id: string): Promise<Profile | null> => {
  const result = await ProfileModel.findOne({ user: id });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Profile not found");
  }
  return result;
};

const updateProfile = async (
  id: string,
  payload: Partial<Profile>,
): Promise<Profile | null> => {
  console.log("payload", payload);

  const result = await ProfileModel.findOneAndUpdate({ user: id }, payload, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Profile not found");
  }
  return result;
};

const deleteProfile = async (id: string): Promise<void> => {
  const result = await ProfileModel.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Profile not found");
  }
};

export const ProfileService = {
  createProfile,
  getProfileById,
  updateProfile,
  deleteProfile,
};
