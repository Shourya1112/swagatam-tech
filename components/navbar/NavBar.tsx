// import { usePathname } from 'next/navigation'
import React from 'react'
import NavBarFixed from './NavBarFixed'
// import NavBarStatic from './NavBarStatic'

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Projects', link: '/' },
  { name: 'Services', link: '/' },
  { name: 'Careers', link: '/' },
  { name: 'Contact', link: '/' },
]

const NavBar = () => {
  // const { scrollYProgress } = useScroll()

  // //   const location = usePathname()

  // // const [scrollPercentage, setScrollPercentage] = useState(0)
  // const [scrolled, setScrolled] = useState(false)
  // //   const [index, setIndex] = useState(0)
  // //   const [locationIndex, setLocationIndex] = useState(0)

  // //   useEffect(() => {
  // //     const startIndex = navItems.findIndex((item) => item.link === location)

  // //     console.log(startIndex)

  // //     setIndex(startIndex)
  // //     setLocationIndex(startIndex)
  // //   }, [navItems, location])

  // // Transform scroll progress to percentage (0-100)
  // const scrollPercentageValue = useTransform(scrollYProgress, [0, 1], [0, 100])

  // useEffect(() => {
  //   const unsubscribe = scrollPercentageValue.on('change', (latest) => {
  //     const scrollindex = 10
  //     const percentage = Math.round(latest)
  //     // setScrollPercentage(percentage)
  //     setScrolled(percentage > scrollindex)
  //     console.log(percentage)
  //   })

  //   return () => unsubscribe()
  // }, [scrollPercentageValue])
  return (
    <>
      <div className="h-20 md:h-24">
        <NavBarFixed scrolled={true} navItems={navItems} />
      </div>
      {/* <NavBarStatic scrolled={scrolled} navItems={navItems} /> */}
    </>
  )
}

export default NavBar
