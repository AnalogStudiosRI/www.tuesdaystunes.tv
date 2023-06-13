import { expect } from '@esm-bundle/chai';
import './cast-and-crew.js';

describe('Components/Cast and Crew', () => {
  const numProfiles = 4;
  let castAndCrew;

  beforeEach(async () => {
    castAndCrew = document.createElement('tt-cast-crew');

    document.body.appendChild(castAndCrew);

    await castAndCrew.updateComplete;
  });

  afterEach(() => {
    castAndCrew.remove();
    castAndCrew = null;
  });

  describe('Default Behavior', () => {
    it('should not be null', () => {
      expect(castAndCrew).not.equal(undefined);
      expect(castAndCrew.querySelectorAll('.profiles').length).equal(1);
    });

    it('should have the expected heading text', () => {
      const heading = castAndCrew.querySelectorAll('h2');

      expect(heading.length).to.equal(1);
      expect(heading[0].textContent).to.contain('The Crew');
    });

    it('should have the expected number of profile avatars', () => {
      const avatars = castAndCrew.querySelectorAll('img');

      expect(avatars.length).to.equal(numProfiles);

      avatars.forEach(avatar => {
        expect(avatar.getAttribute('src')).not.equal(undefined);
        expect(avatar.getAttribute('alt')).not.equal(undefined);
      });
    });

    it('should have the expected number of profile name headings', () => {
      const nameHeadings = castAndCrew.querySelectorAll('h3');

      expect(nameHeadings.length).to.equal(numProfiles);
      nameHeadings.forEach(heading => {
        expect(heading.textContent).not.equal(undefined);
      });
    });

    it('should have the expected number of profile title headings', () => {
      const titleHeadings = castAndCrew.querySelectorAll('h4');

      expect(titleHeadings.length).to.equal(numProfiles);
      titleHeadings.forEach(heading => {
        expect(heading.textContent).not.equal(undefined);
      });
    });
  });

});