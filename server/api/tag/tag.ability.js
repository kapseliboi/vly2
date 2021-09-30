import { Role } from '../../services/authorize/role'
import { Action } from '../../services/abilities/ability.constants'
import { SchemaName } from './tag.constants'

/*
// TypeScript definition
interface Rule {
  actions: string | string[],
  subject: string | string[],
  conditions?: Object,
  fields?: string[],
  inverted?: boolean, // default is `false`
  reason?: string // mainly to specify why user can't do something. See forbidden reasons for details
}
*/
const ruleBuilder = (session) => {
  // allow log in person to list the tags
  // no create, update, delete via the API
  const basicAbilities = [
    {
      subject: SchemaName,
      action: [Action.LIST, Action.READ]
    }
  ]

  const adminAbilities = [{
    subject: SchemaName,
    action: Action.MANAGE
  }]

  return {
    [Role.ANON]: basicAbilities,
    [Role.VOLUNTEER]: basicAbilities,
    [Role.BASIC]: basicAbilities,
    [Role.OPPORTUNITY_PROVIDER]: basicAbilities,
    [Role.SUPPORT]: adminAbilities,
    [Role.ADMIN]: adminAbilities
  }
}

export default ruleBuilder
