import { Link } from '@tanstack/react-router'

export function NotFound({ children }: { children?: any }) {
  return (
    <div className="">
      <div className="">
        {children || <p>The page you are looking for does not exist.</p>}
      </div>

    </div>
  )
}
