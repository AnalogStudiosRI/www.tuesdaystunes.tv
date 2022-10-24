export default class CastAndCrew extends HTMLElement {
  constructor() {
    super();
    this.profiles = [{
      name: 'Dave Flamand',
      title: 'Host',
      avatar: '/assets/images/avatar-dave.webp'
    }, {
      name: 'Owen Buckley',
      title: 'Producer',
      avatar: '/assets/images/avatar-owen.webp'
    }, {
      name: 'Erika Flamand',
      title: 'Designer',
      avatar: '/assets/images/avatar-erika.webp'
    }, {
      name: 'Tunesy',
      title: 'Mascot',
      avatar: '/assets/images/avatar-tunesy.webp'
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
                    class="block w-20 rounded-full text-center m-0 ml-auto mr-auto"
                    src="${avatar}"
                    alt="Photo of ${name} (${title})"
                    height="100"
                    width="100"
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