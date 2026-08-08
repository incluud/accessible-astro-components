import StorySlot from '../StorySlot.astro'
import Drawer from './Drawer.astro'

export default {
  component: StorySlot,
}

const baseArgs = {
  Component: Drawer,
  triggerId: 'drawer-trigger',
  title: 'Project details',
  beforeIsHtml: true,
  before: '<button id="drawer-trigger" type="button">Open drawer</button>',
}

export const Default = {
  args: {
    ...baseArgs,
    slot: 'This drawer contains additional information and actions.',
  },
}

export const PositionLeft = {
  args: {
    ...baseArgs,
    position: 'left',
    slot: 'Left positioned drawer content.',
  },
}

export const PositionTop = {
  args: {
    ...baseArgs,
    position: 'top',
    slot: 'Top positioned drawer content.',
  },
}

export const PositionBottom = {
  args: {
    ...baseArgs,
    position: 'bottom',
    slot: 'Bottom positioned drawer content.',
  },
}

export const WithFooter = {
  args: {
    ...baseArgs,
    showFooter: true,
    slot: 'Drawer with a footer. Minim ullamco ea elit tempor est non qui adipisicing esse. Adipisicing aliqua enim esse dolore est sit non commodo id veniam cillum pariatur mollit. Do in mollit reprehenderit nisi nisi non nisi labore labore culpa consequat voluptate anim et. Minim eiusmod laboris ut laboris reprehenderit minim non reprehenderit. Ex exercitation elit esse adipisicing adipisicing nulla consequat voluptate sint irure aliquip ut dolor eu. Ullamco duis exercitation proident ea proident dolore culpa irure dolore mollit ea culpa. Proident commodo elit officia adipisicing eiusmod culpa dolor ut ullamco nisi nisi esse. In cupidatat laboris voluptate officia cupidatat id mollit qui et. Cillum est velit elit dolor nulla sit velit ut reprehenderit officia deserunt cillum laborum. Amet sit eiusmod nostrud ullamco labore mollit adipisicing aute sit. Cupidatat reprehenderit culpa proident officia reprehenderit duis labore. Mollit adipisicing ipsum anim pariatur elit tempor consequat ad mollit labore elit do adipisicing. Eiusmod do commodo aliqua anim. Magna aliqua dolor esse elit officia anim pariatur enim eiusmod quis ad qui. Mollit irure commodo nostrud eiusmod ea anim voluptate id consequat ipsum irure mollit. Eu enim consequat nisi non qui sit aliqua ullamco anim magna. Voluptate id dolore aliquip exercitation voluptate id est nulla dolore anim. Adipisicing velit amet anim ex culpa consectetur nostrud cillum tempor consectetur ullamco nisi. Sit fugiat proident officia consectetur culpa magna occaecat. Aliquip Lorem aute reprehenderit sunt qui aliquip voluptate aute elit irure nisi et officia deserunt. Veniam nulla ipsum est Lorem tempor ad mollit sunt officia do anim consequat nostrud. Adipisicing cillum esse deserunt. Exercitation aute sunt officia aliqua sint est ipsum ea sunt labore nulla sunt consequat minim. Ut consectetur laboris fugiat ut proident laborum cupidatat ut sint minim veniam occaecat dolor excepteur. Ea ex culpa qui nisi culpa aute eiusmod tempor nisi. Cupidatat veniam amet ad incididunt ex in exercitation eu. Est aliquip est adipisicing pariatur eiusmod amet commodo proident ex nulla qui ullamco. Duis aliqua ullamco fugiat ex esse aliquip pariatur cupidatat eiusmod Lorem ut. Aliqua enim anim ut reprehenderit mollit eu duis eu magna culpa. Qui proident duis tempor elit enim nostrud. Proident duis excepteur reprehenderit esse in consequat culpa elit non incididunt amet voluptate deserunt eiusmod. Nisi sunt culpa ex ut labore aliqua dolore pariatur officia magna labore. Ex cillum aliquip irure nulla ad non est ea dolore fugiat. Sunt cillum nostrud sit ut non Lorem nisi nulla eu. Occaecat consequat nisi laboris irure laborum incididunt. Velit commodo exercitation labore cillum laborum consequat irure cupidatat irure ullamco et adipisicing excepteur. Labore aliqua commodo excepteur quis. Do occaecat aliquip velit elit esse est ea nulla est eiusmod. Laboris velit id aute enim. Nulla ad nulla ipsum laborum eiusmod. Magna occaecat adipisicing laborum enim voluptate cupidatat veniam eu occaecat fugiat. Occaecat culpa aute minim sit dolore eiusmod qui id. Voluptate fugiat labore occaecat dolor nisi minim commodo sit dolore laborum dolore in sit. Commodo labore aute velit id exercitation. Sint adipisicing amet consequat cupidatat proident. Ullamco sit cillum nisi ullamco ex sit reprehenderit sint sunt. Reprehenderit anim id deserunt deserunt tempor esse cillum esse cupidatat ullamco pariatur exercitation. Reprehenderit consectetur sunt laboris. Ipsum amet officia aute dolore id magna fugiat mollit anim aliqua anim cillum laborum. Nisi elit deserunt irure amet esse. Minim ea ex aute Lorem pariatur exercitation ex exercitation excepteur tempor laborum. Tempor reprehenderit non sit. Non minim voluptate exercitation ut cillum adipisicing voluptate reprehenderit sit dolor elit ex excepteur do. Pariatur ad et ad laboris ullamco. In et sit reprehenderit eu commodo amet aute consectetur id adipisicing voluptate duis excepteur. Velit incididunt labore id id eu veniam occaecat incididunt officia qui nulla duis est velit aute. Laborum velit pariatur velit culpa ad mollit culpa eu consequat culpa laboris id ex. Ad anim excepteur consectetur magna mollit laboris non laboris. Eu ullamco ut laborum magna id excepteur ullamco. Aute consectetur culpa commodo incididunt laboris officia est et. Ipsum culpa ad pariatur laborum culpa dolor nulla enim ut nisi laboris laborum irure minim elit. Lorem cillum consectetur anim velit cillum incididunt veniam do. Sunt reprehenderit minim excepteur sint et eu et tempor nisi consectetur tempor occaecat sit deserunt. Ea occaecat aliquip exercitation in enim veniam mollit ad laboris enim est. Deserunt qui veniam enim nostrud anim pariatur voluptate do id enim non adipisicing fugiat nulla reprehenderit. Ut officia enim velit eiusmod sit. Laboris irure nostrud non eu voluptate anim tempor laboris sint cupidatat magna nisi pariatur dolore. Nisi aute fugiat irure sunt eiusmod culpa deserunt consectetur non id qui ea dolor deserunt nulla. Excepteur cupidatat non excepteur eu adipisicing dolor occaecat dolor sunt velit dolor. Nulla consectetur incididunt veniam ad ex ullamco eu Lorem officia non cupidatat culpa. Veniam amet ex consectetur incididunt eu eiusmod elit est. Duis dolor aliqua culpa deserunt laboris reprehenderit ipsum amet nostrud est ipsum officia exercitation nostrud. Occaecat amet cupidatat in ad ea ex amet irure. Excepteur sunt ad laborum excepteur Lorem anim laboris eiusmod cupidatat veniam exercitation ut officia cillum. Ullamco dolore ut enim cupidatat elit sit culpa eu est laborum non officia. Ullamco consectetur laborum et exercitation in reprehenderit ad duis nostrud aliqua veniam. Deserunt veniam irure sunt tempor minim est id consequat tempor. Non sunt aute anim adipisicing ad officia occaecat do tempor veniam non enim et laboris ea. Dolore eiusmod commodo qui occaecat ullamco nulla ut magna culpa ut fugiat dolor occaecat. Sit do eu nulla incididunt aute anim occaecat irure nulla ad adipisicing. Anim laboris commodo quis mollit ex minim officia ullamco eiusmod aliqua ipsum dolor sunt aliquip laborum. Ea commodo labore cupidatat.',
    footerSlotIsHtml: true,
    footerSlot: `
      <button>Cancel</button>
      <button>Save changes</button>
    `,
  },
}

export const CustomCloseText = {
  args: {
    ...baseArgs,
    closeText: 'Dismiss',
    slot: 'Drawer with a custom close label.',
  },
}
