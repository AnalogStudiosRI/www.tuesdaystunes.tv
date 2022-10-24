export default class CastAndCrew extends HTMLElement {
  constructor() {
    super();
    this.profiles = [{
      name: 'Dave Flamand',
      title: 'Host',
      avatar: 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=' // eslint-disable-line max-len
    }, {
      name: 'Owen Buckley',
      title: 'Producer',
      avatar: 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=' // eslint-disable-line max-len
    }, {
      name: 'Erika Flamand',
      title: 'Designer',
      avatar: 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=' // eslint-disable-line max-len
    }, {
      name: 'Tunesy',
      title: 'Mascot',
      avatar: 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=' // eslint-disable-line max-len
    }];
  }

  connectedCallback() {
    const { profiles } = this;

    this.innerHTML = `
      <h2
        class="text-3xl text-center font-extrabold"
        style="font-family:var(--font-secondary);border-bottom: 2px solid rgba(107, 114, 128);"
      >
        The Crew
      </h2>
      <div class="profiles">
        <div class="grid md:grid-cols-4 grid-cols-2">
          ${
            profiles.map((person) => {
              const { avatar, name, title } = person;

              return `
                <div class="text-center">
                  <img
                    class="block w-20 rounded-full text-center"
                    style="margin:0 auto"
                    src="${avatar}"
                    alt="Photo of ${name} (${title})"
                  />
                  <h3 class="font-bold text-center">
                    ${name}
                  </h3>
                  <h4 class="uppercase text-center text-gray-500">
                    ${title}
                  </h3>
                </div>
              `;
            }).join('')
          }
        </div>
      </div>
    `;
  }
}

customElements.define('tt-cast-crew', CastAndCrew);