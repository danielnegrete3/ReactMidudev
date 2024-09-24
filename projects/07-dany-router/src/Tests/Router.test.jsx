import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { Paths } from '../Utils/constants.js'
import Router  from '../Route/Router.jsx'
import  Route  from '../Route/Route.jsx'
import  Link  from '../Route/Link.jsx'
import  getCurrentPath  from '../Utils/getCurrentPath.js'

vi.mock('../Utils/getCurrentPath.js', () => ({
  __esModule : true,
  default: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should render without problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('should render 404 if no routes match', () => {
    render(<Router routes={[]} defaultRoute={() => <h1>404</h1>} />)
    expect(screen.getByText('404')).toBeTruthy()
  })

  it('should render the component of the first route that matches', () => {
    getCurrentPath.mockReturnValue(Paths.ABOUT)

    const routes = [
      {
        Path: Paths.HOME,
        Component: () => <h1>Home</h1>
      },
      {
        Path: Paths.ABOUT,
        Component: () => <h1>About</h1>
      }
    ]

    render(<Router routes={routes} />)
    expect(screen.getByText('About')).toBeTruthy()
  })

  it('should navigate using Links', async () => {
    getCurrentPath.mockReturnValueOnce('/')

    render(
      <Router>
        <Route
          Path={Paths.HOME} Component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to={Paths.ABOUT}>Go to About</Link>
              </>
            )
          }}
        />
        <Route Path='/about' Component={() => <h1>About</h1>} />
      </Router>
    )

    // Click on the link
    const anchor = screen.getByText(/Go to About/)
    fireEvent.click(anchor)

    const aboutTitle = await screen.findByText('About')

    // Check that the new route is rendered
    expect(aboutTitle).toBeTruthy()
  })
})