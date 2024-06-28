import React from 'react'
import { useNavigate } from 'react-router-dom'

import { GithubIcon } from '@/components/icons'
import GoogleIcon from '@/components/icons/GoogleIcon'
import { useToast } from '@/components/ui/use-toast'
import { doSignInWithGitHub, doSignInWithGoogle } from '@/firebase/auth'
import { ROUTES } from '@/routes'

const SocialAuth: React.FC = () => {
  const { toast } = useToast()
  const navigate = useNavigate()
  const onGoogleSignIn = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      await doSignInWithGoogle()
      navigate(ROUTES.HOME)
      toast({
        description: '✔️ You have successfully logged in!',
      })
    } catch (error) {
      toast({
        description: `❌ ${String(error)}`,
        variant: 'destructive',
      })
    }
  }

  const onGitHubSignIn = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      await doSignInWithGitHub()
      navigate(ROUTES.HOME)
      toast({
        description: '✔️ You have successfully logged in!',
      })
    } catch (error) {
      toast({
        description: `❌ ${String(error)}`,
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="flex gap-3 flex-row">
      <div
        className="w-10 h-10 cursor-pointer hover:bg-accent transition-colors rounded-full p-2"
        onClick={onGoogleSignIn}
      >
        <GoogleIcon />
      </div>
      <div
        onClick={onGitHubSignIn}
        className="w-10 h-10 cursor-pointer hover:bg-accent transition-colors rounded-full p-2"
      >
        <GithubIcon className={'github'} />
      </div>
    </div>
  )
}

export default SocialAuth
