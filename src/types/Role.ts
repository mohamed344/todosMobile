
export const enum RoleCode {
  EMPLOYEE = 'EMPLOYEE',
  MANAGER = 'MANAGER',
  SUPERADMIN = 'SUPERADMIN',
  OWNER = 'OWNER',
}


export default interface Role {
  id: string,
  code: RoleCode
}
