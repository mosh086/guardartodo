class AsidemenuController {
  constructor(Auth) {
    this.name = 'asidemenu';
    this.username = Auth.current.username;
  }
}
AsidemenuController.$inject = ['Auth'];
export default AsidemenuController;
