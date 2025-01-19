import { render, screen, fireEvent } from '@testing-library/react';
import Post from '..'; 

describe('Testes para o componente Post', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<Post>Testando o post</Post>); 
    expect(screen.getByText('Testando o post')).toBeInTheDocument(); 
  });

  it('Deve adicionar dois comentários', () => {
    render(<Post>Testando o post</Post>); 
    
    const textarea = screen.getByTestId('textarea');
    const button = screen.getByText('Comentar');
    
    fireEvent.change(textarea, { target: { value: 'Comentário 1' } });
    fireEvent.click(button);

    fireEvent.change(textarea, { target: { value: 'Comentário 2' } });
    fireEvent.click(button);

    expect(screen.getByText('Comentário 1')).toBeInTheDocument();
    expect(screen.getByText('Comentário 2')).toBeInTheDocument();
  });
});
