import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

export default function FooterCon() {
  return (
    <Footer container className="border border-t-8 border-gray-600">
      <div className="w-full max-w-7xl mx-auto ">
        <div className="grid justify-between gap-5 w-full sm:flex md:gid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-centre whitespace-nowrap text-lg sm:text-xl font-bold dark:text-white"
            >
              <span className="px-1 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white">
                SARGARS-MERN
              </span>
              BLOG
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup className="flex flex-col">
                <Footer.Link
                  href="https://www.100jsprojects.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 js Projects
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sagar'S Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="FELLOW US" />
              <Footer.LinkGroup className="flex flex-col">
                <Footer.Link
                  href="https://www.github.com/Lucky3737"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 js Projects
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="LEGAL" />
              <Footer.LinkGroup className="flex flex-col">
                <Footer.Link href="#">Privacy Poclicy</Footer.Link>
                <Footer.Link href="#">Term & Condition</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:justify-center sm:items-center">
          <Footer.Copyright
            href="#"
            by="SAGAR' BLOG"
            year={new Date().getFullYear()}
          />
          <div className="flex sm:mt-1 md:mt-4 sm:justify-center gap-5">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
