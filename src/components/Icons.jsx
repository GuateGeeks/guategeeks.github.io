// Re-export react-icons under the same names used throughout the codebase.
// Wrapper components preserve className sizing (e.g. h-6 w-6) compatibility.
import React from 'react';
import { HiMenu, HiX, HiMoon, HiSun, HiCheck, HiOutlineDesktopComputer, HiOutlineUserGroup, HiOutlineAcademicCap } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const wrap = (Icon, defaultClass) =>
  ({ className, ...props }) => (
    <Icon className={className || defaultClass} aria-hidden="true" {...props} />
  );

export const MenuIcon = wrap(HiMenu, 'h-6 w-6');
export const CloseIcon = wrap(HiX, 'h-6 w-6');
export const MoonIcon = wrap(HiMoon, 'h-5 w-5');
export const SunIcon = wrap(HiSun, 'h-5 w-5');
export const WhatsAppIcon = wrap(FaWhatsapp, 'h-6 w-6');
export const CheckIcon = wrap(HiCheck, 'h-5 w-5');
export const RobotIcon = wrap(HiOutlineDesktopComputer, 'h-6 w-6');
export const TeacherIcon = wrap(HiOutlineUserGroup, 'h-6 w-6');
export const StudentIcon = wrap(HiOutlineAcademicCap, 'h-6 w-6');
